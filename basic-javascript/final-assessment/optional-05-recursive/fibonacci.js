function fibonacci(n) {
  if (n <= 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  }

  const result = fibonacci(n-1)
  const length = result.length;
  return [...result, result[length-1] + result[length-2]]
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
