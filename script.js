
        // Theme toggle functionality
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        
        // Check for saved theme preference or default to light
        const currentTheme = localStorage.getItem('theme') || 'light';
        body.setAttribute('data-theme', currentTheme);
        
        // Update toggle position based on current theme
        if (currentTheme === 'dark') {
            body.setAttribute('data-theme', 'dark');
        }
        
        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });

        // Add functionality to the interface
        document.addEventListener('DOMContentLoaded', function() {
            const removeButtons = document.querySelectorAll('.remove-btn');
            const toggleSwitches = document.querySelectorAll('.toggle-switch input');
            const filterButtons = document.querySelectorAll('.filter-btn');
            
            // Remove extension functionality
            removeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const extensionItem = this.closest('.extension-item');
                    const extensionName = extensionItem.querySelector('.extension-name').textContent;
                    
                    if (confirm(`Are you sure you want to remove "${extensionName}"?`)) {
                        extensionItem.style.opacity = '0';
                        extensionItem.style.transform = 'scale(0.8)';
                        extensionItem.style.height = '0';
                        extensionItem.style.padding = '0';
                        extensionItem.style.margin = '0';
                        extensionItem.style.overflow = 'hidden';
                        
                        setTimeout(() => {
                            extensionItem.remove();
                        }, 300);
                    }
                });
            });
            
            // Toggle switch functionality
            toggleSwitches.forEach(toggle => {
                toggle.addEventListener('change', function() {
                    const extensionItem = this.closest('.extension-item');
                    if (this.checked) {
                        extensionItem.classList.remove('inactive');
                    } else {
                        extensionItem.classList.add('inactive');
                    }
                });
            });
            
            // Filter buttons functionality
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    const filter = this.getAttribute('data-filter');
                    const extensionItems = document.querySelectorAll('.extension-item');
                    
                    extensionItems.forEach(item => {
                        switch(filter) {
                            case 'all':
                                item.style.display = 'flex';
                                break;
                            case 'active':
                                if (item.classList.contains('inactive')) {
                                    item.style.display = 'none';
                                } else {
                                    item.style.display = 'flex';
                                }
                                break;
                            case 'inactive':
                                if (item.classList.contains('inactive')) {
                                    item.style.display = 'flex';
                                } else {
                                    item.style.display = 'none';
                                }
                                break;
                        }
                    });
                })
            });
        });