import { useRouter } from "next/router";
import { createRef, MouseEvent, useState } from "react"

export declare interface PasswordBlockerProps {
    children: React.ReactNode;
    isPublic: boolean;
    password: string;
  }

export default function PasswordBlocker({ children, isPublic, password }: PasswordBlockerProps) {
    const [displayChildren, setDisplayChildren] = useState(isPublic);
    const [displayError, setDisplayError] = useState(false);
    let passwordInput = createRef<HTMLInputElement>();

    let handleLock = (value?: string ) : void => {
        if (!value) { return }
        else if (value.trim() === password) {
            setDisplayError(false)
            setDisplayChildren(true);
        } else {
            setDisplayError(true)
        }
    }

    let onSubmitHandler = (e: MouseEvent<HTMLButtonElement>): void => {
        handleLock(passwordInput.current?.value);
        e.preventDefault();
    }

    return (
      <>
      {!displayChildren ? (
          <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">This content is protected</h3>
            <div className="max-w-xl mt-2 text-sm text-gray-500">
              <p>You must insert the provided password to enter</p>
            </div>
            <form className="mt-5 sm:flex sm:items-center">
              <div className="w-full sm:max-w-xs">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  ref={passwordInput}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="**********"
                  aria-describedby="password-error"
                />
                {displayError && <p className="mt-2 text-sm text-red-600" id="password-error">Incorrect Password ...</p>}
              </div>
              <button
                type="submit"
                onClick={onSubmitHandler}
                className="inline-flex items-center justify-center w-full px-4 py-2 mt-3 font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Push the door
              </button>
            </form>
          </div>
        </div>
      ) : (<>{children}</>)}
      </>
    )
  }