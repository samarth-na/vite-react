export default function Example() {
  return (
    <form>
      <div className="space-y-12">
        <div className="pb-12 border-b border-gray-900/10">
          <h2 className="font-semibold text-gray-900 text-base/7">Profile</h2>
          <p className="mt-1 text-gray-600 text-sm/6">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 mt-10 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block font-medium text-gray-900 text-sm/6"
              >
                Username
              </label>
              <div className="mt-2">
                <div className="flex items-center pl-3 bg-white rounded-md outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <div className="text-base text-gray-500 select-none shrink-0 sm:text-sm/6">
                    workcation.com/
                  </div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="janesmith"
                    className="block py-1.5 pr-3 pl-1 min-w-0 text-base text-gray-900 grow placeholder:text-gray-400 sm:text-sm/6 focus:outline focus:outline-0"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block font-medium text-gray-900 text-sm/6"
              >
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block py-1.5 px-3 w-full text-base text-gray-900 bg-white rounded-md outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  defaultValue={""}
                />
              </div>
              <p className="mt-3 text-gray-600 text-sm/6">
                Write a few sentences about yourself.
              </p>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="photo"
                className="block font-medium text-gray-900 text-sm/6"
              >
                Photo
              </label>
              <div className="flex gap-x-3 items-center mt-2">
                <button
                  type="button"
                  className="py-1.5 px-2.5 text-sm font-semibold text-gray-900 bg-white rounded-md ring-1 ring-inset ring-gray-300 shadow-sm hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block font-medium text-gray-900 text-sm/6"
              >
                Cover photo
              </label>
              <div className="flex justify-center py-10 px-6 mt-2 rounded-lg border border-dashed border-gray-900/25">
                <div className="text-center">
                  <div className="flex mt-4 text-gray-600 text-sm/6">
                    <label
                      htmlFor="file-upload"
                      className="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-none hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-gray-600 text-xs/5">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-12 border-b border-gray-900/10">
          <h2 className="font-semibold text-gray-900 text-base/7">
            Personal Information
          </h2>
          <p className="mt-1 text-gray-600 text-sm/6">
            Use a permanent address where you can receive mail.
          </p>

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 mt-10 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block font-medium text-gray-900 text-sm/6"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block py-1.5 px-3 w-full text-base text-gray-900 bg-white rounded-md outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block font-medium text-gray-900 text-sm/6"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block py-1.5 px-3 w-full text-base text-gray-900 bg-white rounded-md outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block font-medium text-gray-900 text-sm/6"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block py-1.5 px-3 w-full text-base text-gray-900 bg-white rounded-md outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block font-medium text-gray-900 text-sm/6"
              >
                Country
              </label>
              <div className="grid grid-cols-1 mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="col-start-1 row-start-1 py-1.5 pr-8 pl-3 w-full text-base text-gray-900 bg-white rounded-md appearance-none outline outline-1 -outline-offset-1 outline-gray-300 sm:text-sm/6 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block font-medium text-gray-900 text-sm/6"
              >
                Street address
              </label>
              <div className="mt-2">
                <input
                  id="street-address"
                  name="street-address"
                  type="text"
                  autoComplete="street-address"
                  className="block py-1.5 px-3 w-full text-base text-gray-900 bg-white rounded-md outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="city"
                className="block font-medium text-gray-900 text-sm/6"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="address-level2"
                  className="block py-1.5 px-3 w-full text-base text-gray-900 bg-white rounded-md outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block font-medium text-gray-900 text-sm/6"
              >
                State / Province
              </label>
              <div className="mt-2">
                <input
                  id="region"
                  name="region"
                  type="text"
                  autoComplete="address-level1"
                  className="block py-1.5 px-3 w-full text-base text-gray-900 bg-white rounded-md outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block font-medium text-gray-900 text-sm/6"
              >
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  id="postal-code"
                  name="postal-code"
                  type="text"
                  autoComplete="postal-code"
                  className="block py-1.5 px-3 w-full text-base text-gray-900 bg-white rounded-md outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pb-12 border-b border-gray-900/10">
          <h2 className="font-semibold text-gray-900 text-base/7">
            Notifications
          </h2>
          <p className="mt-1 text-gray-600 text-sm/6">
            We'll always let you know about important changes, but you pick what
            else you want to hear about.
          </p>

          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="font-semibold text-gray-900 text-sm/6">
                By email
              </legend>
              <div className="mt-6 space-y-6">
                <div className="flex gap-3">
                  <div className="flex items-center h-6 shrink-0">
                    <div className="grid grid-cols-1 group size-4">
                      <input
                        defaultChecked
                        id="comments"
                        name="comments"
                        type="checkbox"
                        aria-describedby="comments-description"
                        className="col-start-1 row-start-1 bg-white rounded border border-gray-300 appearance-none checked:bg-indigo-600 checked:border-indigo-600 disabled:bg-gray-100 disabled:border-gray-300 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 forced-colors:appearance-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:checked:bg-gray-100"
                      />
                      <svg
                        fill="none"
                        viewBox="0 0 14 14"
                        className="col-start-1 row-start-1 justify-self-center self-center pointer-events-none size-3.5 stroke-white group-has-[:disabled]:stroke-gray-950/25"
                      >
                        <path
                          d="M3 8L6 11L11 3.5"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-[:checked]:opacity-100"
                        />
                        <path
                          d="M3 7H11"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-[:indeterminate]:opacity-100"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-sm/6">
                    <label
                      htmlFor="comments"
                      className="font-medium text-gray-900"
                    >
                      Comments
                    </label>
                    <p id="comments-description" className="text-gray-500">
                      Get notified when someones posts a comment on a posting.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex items-center h-6 shrink-0">
                    <div className="grid grid-cols-1 group size-4">
                      <input
                        id="candidates"
                        name="candidates"
                        type="checkbox"
                        aria-describedby="candidates-description"
                        className="col-start-1 row-start-1 bg-white rounded border border-gray-300 appearance-none checked:bg-indigo-600 checked:border-indigo-600 disabled:bg-gray-100 disabled:border-gray-300 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 forced-colors:appearance-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:checked:bg-gray-100"
                      />
                      <svg
                        fill="none"
                        viewBox="0 0 14 14"
                        className="col-start-1 row-start-1 justify-self-center self-center pointer-events-none size-3.5 stroke-white group-has-[:disabled]:stroke-gray-950/25"
                      >
                        <path
                          d="M3 8L6 11L11 3.5"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-[:checked]:opacity-100"
                        />
                        <path
                          d="M3 7H11"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-[:indeterminate]:opacity-100"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-sm/6">
                    <label
                      htmlFor="candidates"
                      className="font-medium text-gray-900"
                    >
                      Candidates
                    </label>
                    <p id="candidates-description" className="text-gray-500">
                      Get notified when a candidate applies for a job.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex items-center h-6 shrink-0">
                    <div className="grid grid-cols-1 group size-4">
                      <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        aria-describedby="offers-description"
                        className="col-start-1 row-start-1 bg-white rounded border border-gray-300 appearance-none checked:bg-indigo-600 checked:border-indigo-600 disabled:bg-gray-100 disabled:border-gray-300 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 forced-colors:appearance-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:checked:bg-gray-100"
                      />
                      <svg
                        fill="none"
                        viewBox="0 0 14 14"
                        className="col-start-1 row-start-1 justify-self-center self-center pointer-events-none size-3.5 stroke-white group-has-[:disabled]:stroke-gray-950/25"
                      >
                        <path
                          d="M3 8L6 11L11 3.5"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-[:checked]:opacity-100"
                        />
                        <path
                          d="M3 7H11"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-[:indeterminate]:opacity-100"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-sm/6">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-900"
                    >
                      Offers
                    </label>
                    <p id="offers-description" className="text-gray-500">
                      Get notified when a candidate accepts or rejects an offer.
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend className="font-semibold text-gray-900 text-sm/6">
                Push notifications
              </legend>
              <p className="mt-1 text-gray-600 text-sm/6">
                These are delivered via SMS to your mobile phone.
              </p>
              <div className="mt-6 space-y-6">
                <div className="flex gap-x-3 items-center">
                  <input
                    defaultChecked
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label
                    htmlFor="push-everything"
                    className="block font-medium text-gray-900 text-sm/6"
                  >
                    Everything
                  </label>
                </div>
                <div className="flex gap-x-3 items-center">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label
                    htmlFor="push-email"
                    className="block font-medium text-gray-900 text-sm/6"
                  >
                    Same as email
                  </label>
                </div>
                <div className="flex gap-x-3 items-center">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label
                    htmlFor="push-nothing"
                    className="block font-medium text-gray-900 text-sm/6"
                  >
                    No push notifications
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="flex gap-x-6 justify-end items-center mt-6">
        <button type="button" className="font-semibold text-gray-900 text-sm/6">
          Cancel
        </button>
        <button
          type="submit"
          className="py-2 px-3 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
