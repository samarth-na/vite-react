import { useState } from "react";

export default function NotificationPreferences() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex flex-row gap-4 align-text-top">
      <input
        type="checkbox"
        className=""
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />

      <div className="text-left align-top">
        <label htmlFor="candidates" className="font-medium text-gray-900">
          Candidates
        </label>
        <p
          className={`text-sm text-gray-500 ${isChecked ? "text-red-500" : "text-gray-900"}`}
        >
          Get notified when a candidate applies for a job.
        </p>
      </div>
    </div>
  );
}
