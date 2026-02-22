document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const allItems = document.querySelectorAll('.fwo'); // все товары
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const query = searchInput.value.toLowerCase().trim();
       
        allItems.forEach(item => {
            const title = item.querySelector('.nazvanya').textContent.toLowerCase();
            if (title.includes(query) || query === '') {
                item.style.display = 'block'; 
            } else {
                item.style.display = 'none'; 
            }
        });
    });
});