    let infoVisible = false;

    function toggleInfo(card) {
        const info = card.querySelector('.info');
        infoVisible = !infoVisible;

        if (infoVisible) {
            info.style.display = 'block';
        } else {
            info.style.display = 'none';
        }
    }