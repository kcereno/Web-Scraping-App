import { Form } from '@remix-run/react';
import React from 'react';

export default function SearchBar() {
  return (
    <Form
      className="flex flex-wrap gap-4 mt-12"
      method="post"
    >
      <input
        className="searchbar-input"
        type="text"
        name=""
        id=""
        placeholder="Enter a product link"
      />

      <button
        type="submit"
        className="searchbar-btn"
      >
        Search
      </button>
    </Form>
  );
}
