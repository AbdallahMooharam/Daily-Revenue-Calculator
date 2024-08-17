function calculateProfit() {
    // Get total revenue
    const totalRevenue = parseFloat(document.getElementById("total-revenue").value) || 0;

    // Get expenses
    const fino = parseFloat(document.getElementById("fino").value) || 0;
    const baladi = parseFloat(document.getElementById("baladi").value) || 0;
    const kabda = parseFloat(document.getElementById("kabda").value) || 0;
    const sogok = parseFloat(document.getElementById("sogok").value) || 0;
    const macaroni = parseFloat(document.getElementById("macaroni").value) || 0;
    const burger = parseFloat(document.getElementById("burger").value) || 0;
    const hawashi = parseFloat(document.getElementById("hawashi").value) || 0;
    const kofta = parseFloat(document.getElementById("kofta").value) || 0;
    const gas = parseFloat(document.getElementById("gas").value) || 0;
    const oil = parseFloat(document.getElementById("oil").value) || 0;
    const spices = parseFloat(document.getElementById("spices").value) || 0;
    const rent = parseFloat(document.getElementById("rent").value) || 0;
    const salary = parseFloat(document.getElementById("salary").value) || 0;
    const mealCost = parseFloat(document.getElementById("meal-cost").value) || 0;

    // Calculate total expenses
    const totalExpenses = fino + baladi + kabda + sogok + macaroni + burger + hawashi + kofta + gas + oil + spices + rent + salary + mealCost;

    // Calculate profit
    const profit = totalRevenue - totalExpenses;

    // Display result
    document.getElementById("result").innerText = `Profit: ${profit.toFixed(2)} units`;
}
