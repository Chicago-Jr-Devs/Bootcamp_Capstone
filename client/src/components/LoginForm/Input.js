import React from 'react';

export function Input() {
  return (
    <form>
      <input id="login-email" label="Email"></input>
      <input id="login-password" label="Password" type="password"></input>
    </form>
  );
}