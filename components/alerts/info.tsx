import React from 'react';

import { InformationCircleIcon, ShieldCheckIcon } from '@heroicons/react/solid';

declare interface AlertProperties {
  icon?: boolean | 'shield-check';
  children: React.ReactNode;
}

/**
 *
 * @param props.icon
 * *disabled by default*
 *
 * options:
 * - `shield-check`
 * - `true` -> info
 */
export default function AlertInfo(props: AlertProperties) {
  const hasIcon = !!props.icon;
  const isShieldCheck = !!(props.icon && props.icon === 'shield-check');
  return (
    <div className={`p-4 rounded-md bg-info-50 dark:bg-info-900 my-2 sm:my-4`}>
      <div className="flex">
        <div className="flex-shrink-0">
          {isShieldCheck ? (
            <ShieldCheckIcon
              className={`w-5 h-5 text-info-400 dark:text-info-200`}
              aria-hidden="true"
            ></ShieldCheckIcon>
          ) : null}
          {!isShieldCheck && hasIcon ? (
            <InformationCircleIcon
              className={`w-5 h-5 text-info-400 dark:text-info-200`}
              aria-hidden="true"
            />
          ) : null}
        </div>
        <div className="flex-1 ml-3 md:flex md:justify-between">
          {props.children && (
            <p className={`text-sm text-info-700 dark:text-info-200`}>
              {props.children}
            </p>
          )}
          {/* <p className="mt-3 text-sm md:mt-0 md:ml-6">
            <a
              href="#"
              className="font-medium text-blue-700 whitespace-nowrap hover:text-blue-600"
            >
              Details <span aria-hidden="true">&rarr;</span>
            </a>
          </p> */}
        </div>
      </div>
    </div>
  );
}