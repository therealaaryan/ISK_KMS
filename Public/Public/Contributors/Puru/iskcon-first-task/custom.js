import dailyMenuData from "./test.json" assert { type: "json" };

const subTableClass = {
	1: "type-one-subtable",
	2: "type-two-subtable",
	3: "type-three-subtable",
};

const mTable = (mPayload = {}, mE, mp = { suffix: "" }) => {
	let innerHTMLData = "";

	// Table Main Headings
	for (let x in mPayload.header.l) {
		const tblHeader = mPayload.header.l[x].txt;
		innerHTMLData += `<tr>`;
		innerHTMLData += `<td colspan="3" class="dm-main-headings heading-${x}">${tblHeader}</td>`;
		innerHTMLData += `</tr>`;
	}

	// Main Meal Type Tables
	for (let x in mPayload.table.l) {
		const mealTable = mPayload.table.l[x];
		// console.log(mealTable);

		// Meal Type Heading Start
		innerHTMLData += `<tr><td colspan="3"></td></tr>`;
		innerHTMLData += `<tr><td colspan="3"></td></tr>`;
		innerHTMLData += `<tr><td colspan="3"></td></tr>`;
		innerHTMLData += `<tr><td colspan="3"></td></tr>`;
		innerHTMLData += `<tr>`;
		innerHTMLData += `<td colspan="3" class="dm-main-table-headings">${mealTable.meal_name}</td>`;
		innerHTMLData += `</tr>`;
		// Meal Type Heading End

		// Meal Type Sub Tables Start
		innerHTMLData += subTablesRender(mealTable);
	}

	mE.innerHTML = innerHTMLData;
};

const subTablesRender = (mealTable) => {
	const hiddenAppend = document.getElementById("table-data-append-hidden");
	hiddenAppend.innerHTML = "";
	let innerHTMLData = "";

	innerHTMLData += `<table><tbody><tr>`;
	innerHTMLData += `<td></td><td></td><td></td>`;
	innerHTMLData += `</tr></tbody></table>`;

	hiddenAppend.innerHTML = innerHTMLData;

	let leftColumnData = 0;
	let rightColumnData = 0;

	for (const y in mealTable.l) {
		const subTables = mealTable.l[y];
		// innerHTMLSubData += subTableRender(subTables);

		for (const z in subTables.l) {
			let innerHTMLSubData = "";
			const subTable = subTables.l[z];
			console.log("subTable >>", subTable);
			innerHTMLSubData += subTableRender(subTable, subTables.tbl_type);
			if (subTables.tbl_type === 1) {
				document
					.querySelector(
						"#table-data-append-hidden > table > tbody > tr:first-child > td:first-child"
					)
					.insertAdjacentHTML("beforeend", innerHTMLSubData);
			}
			if (subTables.tbl_type === 2) {
				document
					.querySelector(
						"#table-data-append-hidden > table > tbody > tr > td:last-child"
					)
					.insertAdjacentHTML("beforeend", innerHTMLSubData);
			}
			if (subTables.tbl_type === 3) {
				const tdChild =
					leftColumnData <= rightColumnData
						? "first-child"
						: "last-child";
				const dirClass =
					leftColumnData <= rightColumnData ? "" : "right";
				if (leftColumnData <= rightColumnData) {
					leftColumnData += subTable.l.length;
				} else {
					rightColumnData += subTable.l.length;
				}
				document
					.querySelector(
						`#table-data-append-hidden > table > tbody > tr > td:${tdChild}`
					)
					.insertAdjacentHTML("beforeend", innerHTMLSubData);
			}
		}
	}

	return document.querySelector(
		"#table-data-append-hidden > table > tbody > tr"
	).innerHTML;
};

const subTableRender = (subTable, tbl_type) => {
	let innerHTMLData = "";

	innerHTMLData +=
		subTable.name || subTable.recipe_name
			? `<div class="dm-subtable-headings">${subTable.name || subTable.recipe_name
			}</div>`
			: "";

	innerHTMLData += `<table class="dm-sub-table ${subTableClass[tbl_type]}" border="2">`;
	innerHTMLData += `<thead>`;
	innerHTMLData += `<tr>`;
	for (const i in subTable.header.l) {
		const subHeaderheadins = subTable.header.l[i];
		innerHTMLData += `<th>${subHeaderheadins.txt}</th>`;
	}
	innerHTMLData += `</tr>`;
	innerHTMLData += `</thead>`;

	innerHTMLData += `<tbody>`;
	for (const i in subTable.l) {
		const subTableRows = subTable.l[i];
		innerHTMLData += `<tr>`;

		for (const j in subTableRows.row.l) {
			const subTableRow = subTableRows.row.l[j];
			innerHTMLData += `<td>${subTableRow.txt}</td>`;
		}

		innerHTMLData += `</tr>`;
	}
	innerHTMLData += `</tbody>`;

	innerHTMLData += `</table>`;
	return innerHTMLData;
};

mTable(dailyMenuData, document.getElementById("daily-menu-main-table-body"), {
	suffix: "",
});

// for (let key in dailyMenuData) {
//     const tbody = document.querySelector("#daily-menu-main-table .tbody");

//     for(let x in data.header){
//     console.log(x);

//     }
// }
