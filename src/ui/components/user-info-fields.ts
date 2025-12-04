/**
 * UserInfoFields component props interface
 */
export interface UserInfoFieldsProps {
  /**
   * User object with name, email, and id
   */
  user: {
    name: string;
    email: string;
    id: string;
  };
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Additional data attributes
   */
  'data-testid'?: string;
}

/**
 * UserInfoFields component factory for Handlebars templates
 * Creates a structured display of user information fields
 */
export function createUserInfoFields(props: UserInfoFieldsProps): string {
  const attributes = props['data-testid']
    ? `data-testid="${props['data-testid']}"`
    : '';

  return `
    <div class="space-y-4" ${attributes}>
      <div class="p-4 bg-gray-50 rounded-lg border border-gray-100">
        <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Full Name</label>
        <p class="text-gray-900 mt-1 font-medium">${props.user.name}</p>
      </div>
      <div class="p-4 bg-gray-50 rounded-lg border border-gray-100">
        <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email Address</label>
        <p class="text-gray-900 mt-1 font-medium">${props.user.email}</p>
      </div>
      <div class="p-4 bg-gray-50 rounded-lg border border-gray-100">
        <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">User ID</label>
        <p class="text-gray-900 mt-1 font-mono text-sm">${props.user.id}</p>
      </div>
    </div>
  `;
}
