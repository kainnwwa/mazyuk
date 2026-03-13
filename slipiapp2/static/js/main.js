document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const filterSelect = document.querySelector('select[name="merchtype"]');
    const resetButton = document.querySelector('.reset-button');
    const allItems = document.querySelectorAll('.fwo'); 
    
    function getCategory(title) {
        title = title.toUpperCase();
        if (title.includes('JERSEY') || title.includes('T-SHIRT') || title.includes('CREWNECK')) 
            return 'Clothes';
        if (title.includes('ALBUM') || title.includes('CD') || title.includes('VINYL')) 
            return 'Albums';
        if (title.includes('ACCESSORY') || title.includes('CAP') || title.includes('BAG')) 
            return 'Accessories';
        return 'Other';
    }
    
    function updateItems() {
        const searchText = searchInput.value.toLowerCase().trim();
        const categoryFilter = filterSelect.value;
        
        allItems.forEach(item => {
            const title = item.querySelector('.nazvanya').textContent;
            const itemCategory = getCategory(title);
            
            const matchesSearch = searchText === '' || title.toLowerCase().includes(searchText);

            const matchesCategory = categoryFilter === '' || categoryFilter === 'All' || itemCategory === categoryFilter;
            
            item.style.display = (matchesSearch && matchesCategory) ? 'block' : 'none';
        });
    }
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        updateItems();
    });
    
    filterSelect.addEventListener('change', function() {
        updateItems();
    });
    
    resetButton.addEventListener('click', function(e) {
        e.preventDefault();
        searchInput.value = '';
        filterSelect.value = '';
        updateItems();
    });
});