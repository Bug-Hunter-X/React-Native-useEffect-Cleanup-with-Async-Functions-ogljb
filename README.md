# React Native useEffect Cleanup with Async Functions

This repository demonstrates a common error in React Native when using the `useEffect` hook with an asynchronous function and provides a solution.

## Problem
The provided example shows how an async operation within a useEffect hook can cause problems if the component unmounts before the operation completes.  This frequently results in a stale closure error or unexpected behavior. 

## Solution
The solution employs the AbortController API to gracefully handle component unmounting during asynchronous operations. This ensures no errors occur and prevents wasted resources.