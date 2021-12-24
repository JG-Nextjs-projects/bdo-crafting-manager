import React, { ChangeEvent } from "react";
import Papa from 'papaparse';

export default function itemParser() {
  const fileUploadHandler = (event: ChangeEvent) => {
    event.preventDefault();

    const target = event.target as HTMLInputElement;

    if (target.files && target.files.length) {
      const file = target.files[0];

      Papa.parse(file, {
        header: true,
        complete: function(results) {
          console.log("Finished:", results.data);
        }
      });
    }
  };

  const formSubmitHandler = () => {};

  return (
    <main className="max-w-screen-md mx-auto mb-12 p-8">
      <h2 className="text-xl font-bold mb-4">CSV File Parser</h2>
      <form onSubmit={formSubmitHandler} className="flex flex-col">
        <input
          onChange={fileUploadHandler}
          className="mb-4"
          type="file"
          accept=".csv"
        />
        <button
          className="border-red-500 border-2 px-4 py-2 rounded bg-red-100 text-red-500 max-w-xs"
          type="submit"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
