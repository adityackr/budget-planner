const budgetInput = document.getElementById('budget-input');
const itemInput = document.getElementById('item-input');
const costInput = document.getElementById('cost-input');

const btnBudget = document.getElementById('btn-budget');
const btnCost = document.getElementById('btn-cost');

const details = document.getElementById('details');
const itemsContent = document.getElementById('items-content');
const items = document.querySelectorAll('.item');
const costs = document.querySelectorAll('.cost');

const totalBudget = document.getElementById('total-budget');
const totalCost = document.getElementById('total-cost');
const remaining = document.getElementById('remaining');

btnBudget.addEventListener('click', () => {
	if (budgetInput.value !== '') {
		totalBudget.innerHTML = parseFloat(budgetInput.value).toFixed(2);
	} else {
		alert('Please fill the input field');
	}
	budgetInput.value = '';
});

btnCost.addEventListener('click', () => {
	if (itemInput.value === '' || costInput.value === '') {
		alert('Please fill the input fields');
	} else {
		const itemsContentDiv = document.createElement('div');
		itemsContentDiv.className =
			'items d-flex justify-content-between align-items-center mb-2';
		const itemDiv = document.createElement('div');
		const costDiv = document.createElement('div');
		itemDiv.className = 'item text-primary fw-bold';
		costDiv.className = 'cost text-primary fw-bold';
		itemDiv.innerHTML = itemInput.value;
		costDiv.innerHTML = parseFloat(costInput.value).toFixed(2);
		itemsContentDiv.append(itemDiv, costDiv);
		details.append(itemsContentDiv);
		itemInput.value = '';
		costInput.value = '';

		let sum = +totalCost.innerHTML;

		sum += parseFloat(costDiv.innerHTML);

		totalCost.innerHTML = parseFloat(sum).toFixed(2);

		remaining.innerHTML = parseFloat(
			+totalBudget.innerHTML - +totalCost.innerHTML
		).toFixed(2);
	}
});
