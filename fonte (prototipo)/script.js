 // Modal functions
        function openModal() {
            document.getElementById('cadastroModal').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('cadastroModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('cadastroModal');
            if (event.target == modal) {
                closeModal();
            }
        }

        // Form submission
        document.getElementById('cadastroForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btnText = document.getElementById('btnText');
            const btnLoading = document.getElementById('btnLoading');
            const successMessage = document.getElementById('successMessage');
            
            // Show loading state
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline-block';
            
            // Simulate API call
            setTimeout(() => {
                // Hide loading state
                btnText.style.display = 'inline';
                btnLoading.style.display = 'none';
                
                // Close modal
                closeModal();
                
                // Show success message
                successMessage.style.display = 'block';
                
                // Hide success message after 4 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 4000);
                
                // Reset form
                document.getElementById('cadastroForm').reset();
            }, 2000);
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Header scroll effect
        let lastScrollTop = 0;
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down
                header.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });

        // Add animation on scroll for feature cards
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe feature cards
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.feature-card');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = `all 0.6s ease ${index * 0.1}s`;
                observer.observe(card);
            });
        });