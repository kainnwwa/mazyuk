
        const страны = {
            US: { цена: 125, символ: "$", размеры: ["M","L","XL","2XL"], дни: 0 },
            CA: { цена: 170, символ: "C$", размеры: ["M","L","XL","2XL","3XL"], дни: 2 },
            UK: { цена: 98, символ: "£", размеры: ["S","M","L","XL","2XL"], дни: 5 },
            DE: { цена: 115, символ: "€", размеры: ["S","M","L","XL"], дни: 4 },
            FR: { цена: 118, символ: "€", размеры: ["S","M","L","XL","2XL"], дни: 4 },
            JP: { цена: 18500, символ: "¥", размеры: ["S","M","L","XL"], дни: 7 },
            AU: { цена: 189, символ: "A$", размеры: ["M","L","XL","2XL","3XL"], дни: 9 },
            BR: { цена: 649, символ: "R$", размеры: ["M","L","XL","2XL","3XL","4XL"], дни: 12 },
            IN: { цена: 9999, символ: "₹", размеры: ["M","L","XL","2XL"], дни: 8 },
            MX: { цена: 2350, символ: "MX$", размеры: ["M","L","XL","2XL","3XL"], дни: 6 }
        };

        const select = document.getElementById('countrySelect');
        const ценаЭлемент = document.getElementById('productPrice');
        const датаЭлемент = document.getElementById('shippingDate');
        const контейнерРазмеров = document.getElementById('sizeOptions');
        
        let выбранныйРазмер = 'L';

        function обновить() {
            const код = select.value;
            const данные = страны[код];
            
            ценаЭлемент.textContent = данные.символ + данные.цена.toFixed(2);
            
            const дата = new Date(2025, 10, 14 + данные.дни);
            датаЭлемент.textContent = дата.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).toUpperCase();
            
            let html = '';
            for (let размер of данные.размеры) {
                let checked = (размер === выбранныйРазмер && данные.размеры.includes(выбранныйРазмер)) ? 'checked' : '';
                if (!данные.размеры.includes(выбранныйРазмер) && размер === данные.размеры[0]) {
                    checked = 'checked';
                    выбранныйРазмер = размер;
                }
                html += `
                    <label>
                        <input type="radio" name="size" class="size-input" value="${размер}" ${checked}>
                        <div class="size-option">${размер}</div>
                    </label>
                `;
            }
            контейнерРазмеров.innerHTML = html;
            
            document.querySelectorAll('input[name="size"]').forEach(radio => {
                if (radio.checked) выбранныйРазмер = radio.value;
                radio.onchange = () => { if (radio.checked) выбранныйРазмер = radio.value; };
            });
        }
        select.onchange = обновить;
        
        обновить();