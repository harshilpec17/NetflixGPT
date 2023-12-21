## useMemo

- It cache the result of a calculation between re-render
- react re render if there are any change in the props or the state change
- when you have a heavy operation, if something change on the page it will re render the page, again it use the memory and slow down the application.
- something like the finding the prime number, its really heavy operation. If something change on the page, it will re render.

useMemo hooks can solve the problem

## useCallback

- it caches the function definition between re-renders.
- it similar of useMemo, However, it will cache the function not the result of it. as useMemo will cache the result of it.

## useRef

-
