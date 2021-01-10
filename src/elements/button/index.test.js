import React from 'react'
import {render} from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Button from './index'

test("seharusnya button tidak bisa di klik klo sudah tampil", () => {
    const {container} = render(<Button isDisabled></Button>)

    expect (container.querySelector("span.disabled")).toBeInTheDocument();
});

test("seharusnya ada spinner loading", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("seharusnya ini <a> ", () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("seharusnya ini <link> component", () => {
  const { container } = render(<Router><Button type="link"></Button></Router>);

  expect(container.querySelector("a")).toBeInTheDocument();
});


