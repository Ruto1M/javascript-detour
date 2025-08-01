function checkType() {
      const input = document.getElementById('inputValue').value.trim();
      const outputDiv = document.getElementById('output');

      // Try to convert input to real JS value
      let value;
      try {
        // JSON parse for true, false, numbers, null, arrays, objects
        value = JSON.parse(input);
      } catch {
        // If fails, treat as string
        value = input;
      }

      const type = typeof value;

      // Show type and some example comparisons
      let message = `Value: ${value}\nType: ${type}\n\n`;

      // Sample type comparisons
      message += `Is string? ${type === 'string'}\n`;
      message += `Is number? ${type === 'number'}\n`;
      message += `Is boolean? ${type === 'boolean'}\n`;
      message += `Is object? ${type === 'object'}\n`;
      message += `Is undefined? ${type === 'undefined'}\n`;
      message += `Is function? ${type === 'function'}\n`;

      // Extra: check if value is null (special case)
      message += `Is null? ${value === null}\n`;

      outputDiv.textContent = message;
    }