const words = [];

    function addWord() {
      const input = document.getElementById('wordInput');
      const value = input.value.trim();
      if (value === '') {
        alert('Please enter something.');
        return;
      }
      words.push(value);
      input.value = '';
      updateWordList();
    }

    function updateWordList() {
      const ul = document.getElementById('wordList');
      ul.innerHTML = '';
      words.forEach((word) => {
        const li = document.createElement('li');
        li.textContent = word;
        ul.appendChild(li);
      });
    }

    function filterWords() {
      // Filter out numbers and words longer than 10 chars
      const filtered = words.filter(item => {
        if (!isNaN(Number(item)) && item !== '') return false;
        // Remove if it contains any digit
        if (/\d/.test(item)) return false;
        // Remove words longer than 10 characters
        if (item.length > 10) return false;
        return true;
      });

        const formatted = filtered.map(toSentenceCase);

        const output = document.getElementById('filteredList');
        output.textContent = formatted.length ? formatted.join(', ') : 'No valid filtered words.';
        }

        function toSentenceCase(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();}