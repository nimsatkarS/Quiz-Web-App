import React from 'react';

export default function Alert(props) {
  return (
    <>
      {/* Use curly braces for conditional rendering inside JSX */}
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{props.alert.type}</strong> : {props.alert.msg}
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close">
          </button>
        </div>
      )}
    </>
  );
}
