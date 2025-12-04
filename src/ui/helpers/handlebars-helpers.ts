import * as Handlebars from 'handlebars';
import {
  ActivityItemProps,
  createActivityItem,
} from '../components/activity-item';
import { AvatarProps, createAvatar } from '../components/avatar';
import { BadgeProps, createBadge } from '../components/badge';
import { ButtonProps, createButton } from '../components/button';
import {
  CardActionProps,
  CardContentProps,
  CardDescriptionProps,
  CardFooterProps,
  CardHeaderProps,
  CardProps,
  CardTitleProps,
  createCard,
  createCardAction,
  createCardContent,
  createCardDescription,
  createCardFooter,
  createCardHeader,
  createCardTitle,
} from '../components/card';
import { createInput, InputProps } from '../components/input';
import { createKPI, KPIProps } from '../components/kpi';
import {
  createUserInfoFields,
  UserInfoFieldsProps,
} from '../components/user-info-fields';

/**
 * Register Handlebars helpers for UI components
 * This should be called during application bootstrap
 */
export function registerHandlebarsHelpers(): void {
  // Register button helper with block support
  Handlebars.registerHelper(
    'button',
    function (options: Handlebars.HelperOptions) {
      const props = (options?.hash as ButtonProps) || {};

      // If used as a block helper, use the block content as children
      if (options.fn) {
        props.children = options.fn(this);
      }

      const html = createButton(props);
      // Return SafeString to prevent HTML escaping
      return new Handlebars.SafeString(html);
    },
  );

  // Register input helper
  Handlebars.registerHelper(
    'input',
    function (options: Handlebars.HelperOptions) {
      const props = (options?.hash as InputProps) || {};
      const html = createInput(props);
      return new Handlebars.SafeString(html);
    },
  );

  // Register avatar helper
  Handlebars.registerHelper(
    'avatar',
    function (options: Handlebars.HelperOptions) {
      const props = (options?.hash as AvatarProps) || {};
      const html = createAvatar(props);
      return new Handlebars.SafeString(html);
    },
  );

  // Register badge helper
  Handlebars.registerHelper(
    'badge',
    function (options: Handlebars.HelperOptions) {
      const props = (options?.hash as BadgeProps) || {};
      const html = createBadge(props);
      return new Handlebars.SafeString(html);
    },
  );

  // Register activityItem helper
  Handlebars.registerHelper(
    'activityItem',
    function (options: Handlebars.HelperOptions) {
      const props = (options?.hash as ActivityItemProps) || {};
      const html = createActivityItem(props);
      return new Handlebars.SafeString(html);
    },
  );

  // Register KPI helper
  Handlebars.registerHelper(
    'kpi',
    function (options: Handlebars.HelperOptions) {
      const props = (options?.hash as KPIProps) || {};
      const html = createKPI(props);
      return new Handlebars.SafeString(html);
    },
  );

  // Register userInfoFields helper
  Handlebars.registerHelper(
    'userInfoFields',
    function (options: Handlebars.HelperOptions) {
      const props = (options?.hash as UserInfoFieldsProps) || {};
      const html = createUserInfoFields(props);
      return new Handlebars.SafeString(html);
    },
  );

  // Register card helper with block support
  Handlebars.registerHelper(
    'card',
    function (options: Handlebars.HelperOptions) {
      const props = (options?.hash as CardProps) || {};

      // If used as a block helper, use the block content as children
      if (options.fn) {
        props.children = options.fn(this);
      }

      const html = createCard(props);
      return new Handlebars.SafeString(html);
    },
  );

  // Register cardHeader helper
  Handlebars.registerHelper(
    'cardHeader',
    function (options: Handlebars.HelperOptions) {
      const props = (options?.hash as CardHeaderProps) || {};

      // If used as a block helper, use the block content as children
      if (options.fn) {
        props.children = options.fn(this);
      }

      const html = createCardHeader(props);
      return new Handlebars.SafeString(html);
    },
  );

  // Register cardTitle helper
  Handlebars.registerHelper(
    'cardTitle',
    function (options: Handlebars.HelperOptions) {
      const props = (options?.hash as CardTitleProps) || {};

      // If used as a block helper, use the block content as children
      if (options.fn) {
        props.children = options.fn(this);
      }

      const html = createCardTitle(props);
      return new Handlebars.SafeString(html);
    },
  );

  // Register cardDescription helper
  Handlebars.registerHelper(
    'cardDescription',
    function (options: Handlebars.HelperOptions) {
      const props = (options?.hash as CardDescriptionProps) || {};

      // If used as a block helper, use the block content as children
      if (options.fn) {
        props.children = options.fn(this);
      }

      const html = createCardDescription(props);
      return new Handlebars.SafeString(html);
    },
  );

  // Register cardAction helper
  Handlebars.registerHelper(
    'cardAction',
    function (options: Handlebars.HelperOptions) {
      const props = (options?.hash as CardActionProps) || {};

      // If used as a block helper, use the block content as children
      if (options.fn) {
        props.children = options.fn(this);
      }

      const html = createCardAction(props);
      return new Handlebars.SafeString(html);
    },
  );

  // Register cardContent helper
  Handlebars.registerHelper(
    'cardContent',
    function (options: Handlebars.HelperOptions) {
      const props = (options?.hash as CardContentProps) || {};

      // If used as a block helper, use the block content as children
      if (options.fn) {
        props.children = options.fn(this);
      }

      const html = createCardContent(props);
      return new Handlebars.SafeString(html);
    },
  );

  // Register cardFooter helper
  Handlebars.registerHelper(
    'cardFooter',
    function (options: Handlebars.HelperOptions) {
      const props = (options?.hash as CardFooterProps) || {};

      // If used as a block helper, use the block content as children
      if (options.fn) {
        props.children = options.fn(this);
      }

      const html = createCardFooter(props);
      return new Handlebars.SafeString(html);
    },
  );

  // Register conditional helpers for template logic
  Handlebars.registerHelper('eq', (a: any, b: any) => a === b);
  Handlebars.registerHelper('ne', (a: any, b: any) => a !== b);
  Handlebars.registerHelper('gt', (a: any, b: any) => a > b);
  Handlebars.registerHelper('lt', (a: any, b: any) => a < b);
  Handlebars.registerHelper('gte', (a: any, b: any) => a >= b);
  Handlebars.registerHelper('lte', (a: any, b: any) => a <= b);
  Handlebars.registerHelper('and', (a: unknown, b: unknown) => a && b);
  Handlebars.registerHelper('or', (a: unknown, b: unknown) => a || b);
  Handlebars.registerHelper('not', (a: any) => !a);

  // Register substring helper for extracting characters
  Handlebars.registerHelper(
    'substring',
    (str: string, start: number, end: number) => {
      if (!str) return '';
      return str.substring(start, end).toUpperCase();
    },
  );
}
