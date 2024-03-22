


    document.addEventListener('DOMContentLoaded', function () {
        const gallery = document.getElementById('gallery');
        const addImageBtn = document.getElementById('addImageBtn');
        const galleryContainer = document.getElementById('gallery-container');
        const buttonContainer = document.getElementById('button-container');
        const instructions = document.getElementById('instructions');

        let imageCount = 1;

        addImageBtn.addEventListener('click', function () {
            if (imageCount <= 8) {
                const card = document.createElement('div');
                card.className = 'card';

                if (imageCount < 8) {
                    const img = document.createElement('img');
                    img.src = `/images/imagen${imageCount}.jpeg`;
                    img.alt = `Imagen ${imageCount}`;
                    card.appendChild(img);
                } else {
                    const messageCard = document.createElement('div');
                    messageCard.className = 'message-card';
                    const message = document.createTextNode('Que este día de la primavera esté lleno de risas, abrazos y flores amarillas, un pequeño detalle para ti y lo especial que eres. ¡Te quiero mucho!');
                    messageCard.appendChild(message);
                    card.appendChild(messageCard);
                    buttonContainer.removeChild(addImageBtn);
                }

                gallery.innerHTML = '';
                gallery.appendChild(card);

                if (imageCount === 1) {
                    instructions.classList.add('hidden');
                }

                imageCount++;
            }
        });
    });
  