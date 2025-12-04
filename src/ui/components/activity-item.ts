import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

/**
 * ActivityItem component variants using Class Variance Authority (CVA)
 */
const activityItemVariants = cva(
  'flex items-center justify-between py-4 hover:bg-gray-50 px-4 rounded-lg transition-colors',
  {
    variants: {
      hasBorder: {
        true: 'border-b border-gray-100',
        false: '',
      },
    },
    defaultVariants: {
      hasBorder: true,
    },
  },
);

/**
 * ActivityItem variant types
 */
export type ActivityItemHasBorder = VariantProps<
  typeof activityItemVariants
>['hasBorder'];

/**
 * ActivityItem component props interface
 */
export interface ActivityItemProps extends VariantProps<
  typeof activityItemVariants
> {
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Activity title/main text
   */
  title: string;
  /**
   * Activity description/subtitle
   */
  description?: string;
  /**
   * Time ago text (e.g., "2 hours ago")
   */
  timeAgo: string;
  /**
   * Status dot color
   */
  statusColor?: 'blue' | 'green' | 'yellow' | 'red' | 'purple';
  /**
   * Additional data attributes
   */
  'data-testid'?: string;
}

/**
 * Generate activity item classes using CVA
 */
export function getActivityItemClasses(props: ActivityItemProps): string {
  const { hasBorder, className } = props;
  return clsx(activityItemVariants({ hasBorder }), className);
}

/**
 * ActivityItem component factory for Handlebars templates
 */
export function createActivityItem(props: ActivityItemProps): string {
  const classes = getActivityItemClasses(props);
  const attributes = props['data-testid']
    ? `data-testid="${props['data-testid']}"`
    : '';

  const statusColorClasses = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    yellow: 'bg-yellow-600',
    red: 'bg-red-600',
    purple: 'bg-purple-600',
  };

  const statusColor = props.statusColor
    ? statusColorClasses[props.statusColor]
    : statusColorClasses.blue;

  const descriptionHtml = props.description
    ? `<p class="text-xs text-gray-500 mt-1">${props.description}</p>`
    : '';

  return `
    <div class="${classes}" ${attributes}>
      <div class="flex items-center gap-4">
        <div class="relative">
          <div class="w-3 h-3 ${statusColor} rounded-full status-dot"></div>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-900">${props.title}</p>
          ${descriptionHtml}
        </div>
      </div>
      <span class="text-xs text-gray-500 font-medium">${props.timeAgo}</span>
    </div>
  `;
}

// Export the main activity item variants function for direct use
export { activityItemVariants };
