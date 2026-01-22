function renderExpenseOverview() { // Renders the expense overview section
  document.getElementById("totalExpenses").textContent =
    "$" + expenseData.totalExpenses;
  document.getElementById("income").textContent = "$" + user.income;
  document.getElementById("balance").textContent =
    "$" + (user.income - expenseData.totalExpenses);
}

// Call the function to render expense overview on page load
renderExpenseOverview();

function renderExpenseSummary() { // Renders the expense summary table
  const summaryTableBody = document.querySelector("#expense-summary tbody");
  summaryTableBody.innerHTML = "";
  expenseSummaryData.forEach(function (expenseCat) {
    const row = document.createElement("tr");
    const cell1 = document.createElement("td");
    cell1.textContent = expenseCat.categoryName;
    row.appendChild(cell1);
    const cell2 = document.createElement("td");
    cell2.textContent = expenseCat.percentage;
    row.appendChild(cell2);
    summaryTableBody.appendChild(row);
  });
  
}

// Call the function to render expense summary on page load
renderExpenseSummary();

function updateDateFormat(date) { // Updates date format to "MMM DD, DDD"

  const d1 = new Date(date);

  const month = d1.toLocaleString("en-us", { month: "short" });

  const day = d1.getDate();

  const dayOfWeek = d1.toLocaleString("en-us", { weekday: "short" });

  return `${month} ${day}, ${dayOfWeek}`;

}

function renderExpenseData() { // Renders the expense data table

    expenses = expenseData.expenses;

    const tableBody = document.querySelector("#entriesTableBody");

    tableBody.innerHTML = "";

    expenses.forEach(function (expense) {

        const row = document.createElement("tr");

        /**Date column**/

        const cell1 = document.createElement("td");

        cell1.textContent = updateDateFormat(expense.date); // Format date

        cell1.className = "text-nowrap";

        row.appendChild(cell1);

        /**Description column**/

        const cell2 = document.createElement("td");

        cell2.textContent = expense.description;

        row.appendChild(cell2);

        /**Amount column**/

        const cell3 = document.createElement("td");

        cell3.textContent = "$" + expense.amount;

        row.appendChild(cell3);

        /**Edit and Delete icons**/

        const cell4 = document.createElement("td");

        cell4.innerHTML =

            '<a href="#" class="me-2 edit expButton" data-mode="edit"' +

            "data-expense='" + JSON.stringify(expense) + "'>" +

            '<img src="./images/edit.png" alt="Edit" width="17px"></a>' +

            '<a href="#" class="delete" data-bs-toggle="modal"' +

            'data-bs-target="#deleteModal"><img src="./images/delete.png" alt="Delete" width="17px"></a>';

        row.appendChild(cell4);

        tableBody.appendChild(row);

    });
    
}

// Call the function to render expense data on page load
renderExpenseData();

function setCategoryDropdown() { // Sets the category dropdown options
    const categoryDropdown = document.getElementById("category");
    expenseCategories.categories.forEach(function (item) {
        const op = document.createElement("option");
        op.text = item;
        op.value = item;
        categoryDropdown.appendChild(op);
    });
    console.log(expenseCategories.categories.length);
}

// Call the function to set the category dropdown on page load
setCategoryDropdown();

function addExpenseHandler() { // Handles Add/Edit Expense button clicks
    $(document).on("click", ".expButton", function (event) {
        event.preventDefault(); // to stop page scrolling on showing modal window
        const mode = $(this).data("mode");
        if (mode === "edit") {
            const expense = $(this).data("expense");
            $("#modalTitle").text("Edit Expense");
            $("#date").val(expense.date.split("T")[0]); // Set date input value
            $("#category").val(expense.categoryName);
            $("#description").val(expense.description);
            $("#amount").val(expense.amount);
            $("#expense-submit-btn").text("Save Changes");
            $("#expenseModal").modal("show");
        } else {
            $("#modalTitle").text("Add Expense");
            $("#expense-submit-btn").text("Submit");
            $("#expenseForm")[0].reset();  // Clear form fields if adding a new expense
            $("#expenseModal").modal("show");
        }
    });
}

// Call the function to set up Add/Edit Expense button handlers on page load
addExpenseHandler();

function deleteExpenseHandler() { // Handles Delete Expense button clicks
    $(document).on("click", ".delete", function (event) {
        event.preventDefault(); // to stop page scrolling on showing modal window
        const expense = $(this).data("expense");
        $("#delete-confirm-btn").data("expense", expense);
    });
}

// Call the function to set up Delete Expense button handlers on page load
deleteExpenseHandler();

document.addEventListener("DOMContentLoaded", function () { // On DOM load
    renderExpenseOverview();
    renderExpenseSummary();
    renderExpenseData();
    setCategoryDropdown();
    addExpenseHandler();
    deleteExpenseHandler();
});