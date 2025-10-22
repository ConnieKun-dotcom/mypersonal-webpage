document.addEventListener('DOMContentLoaded', function() {
    // Social media links
    const socialLinks = {
        facebook: 'https://www.facebook.com/share/1G3HRtSvdw/?mibextid=wwXIfr',
        tiktok: 'https://www.tiktok.com/@_sinecera_?_t=ZS-90kRAijW6i4&_r=1',
        instagram: 'https://www.instagram.com/con_appetit?igsh=MTlocTF3NGIyYXEybg%3D%3D&utm_source=qr'
    };

    // Add click events to social icons
    Object.keys(socialLinks).forEach(platform => {
        const element = document.getElementById(platform);
        if (element) {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                window.open(socialLinks[platform], '_blank');
            });
        }
    });

    // Handle view interests button click
    const viewInterestsBtn = document.getElementById('view-interests');
    if (viewInterestsBtn) {
        viewInterestsBtn.addEventListener('click', function() {
            document.getElementById('home-page').style.display = 'none';
            document.getElementById('interests-page').style.display = 'block';
            window.scrollTo(0, 0);
        });
    }

    // Handle message me button
    const messageBtn = document.getElementById('message-me');
    if (messageBtn) {
        messageBtn.addEventListener('click', function() {
            alert('Feel free to reach out to me through my social media links!');
        });
    }

    // Navigation function for interest pages
    function showInterest(interestId) {
        document.getElementById('interests-page').style.display = 'none';
        const interestPage = document.getElementById(interestId);
        if (interestPage) {
            interestPage.style.display = 'block';
        }
    }

    // Back to interests function
    function backToInterests() {
        // Hide all interest pages
        document.querySelectorAll('.interest-page').forEach(page => {
            page.style.display = 'none';
        });
        // Show interests page
        document.getElementById('interests-page').style.display = 'block';
        // Scroll to top
        window.scrollTo(0, 0);
    }

    // Make functions available globally
    window.showInterest = showInterest;
    window.backToInterests = backToInterests;
});