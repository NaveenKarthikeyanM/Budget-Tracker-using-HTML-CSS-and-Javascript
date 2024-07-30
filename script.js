document.getElementById('add-transaction-btn').addEventListener('click', function() {
    const type = document.getElementById('transaction-type').value;
    const name = document.getElementById('transaction-name').value;
    const amount = document.getElementById('transaction-amount').value;

    if (type === 'Choose one...' || name === '' || amount === '') {
        alert('Please fill out all fields.');
        return;
    }

    const tableBody = document.getElementById('transaction-table-body');
    const newRow = document.createElement('tr');

    const typeCell = document.createElement('td');
    const nameCell = document.createElement('td');
    const amountCell = document.createElement('td');
    const optionsCell = document.createElement('td');

    typeCell.textContent = type;
    nameCell.textContent = name;
    amountCell.textContent = amount;

    const deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.textContent = 'Delete';
    deleteLink.classList.add('remove-link');
    deleteLink.addEventListener('click', function(e) {
        e.preventDefault();
        tableBody.removeChild(newRow);
    });

    optionsCell.appendChild(deleteLink);

    newRow.appendChild(typeCell);
    newRow.appendChild(nameCell);
    newRow.appendChild(amountCell);
    newRow.appendChild(optionsCell);

    tableBody.appendChild(newRow);

    document.getElementById('transaction-type').value = 'Choose one...';
    document.getElementById('transaction-name').value = '';
    document.getElementById('transaction-amount').value = '';
});
