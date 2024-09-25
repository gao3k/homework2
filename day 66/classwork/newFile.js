<script>
// ღილაკის ელემენტის პოვნა
    const button = document.getElementById('addParagraphBtn');

    // ღილაკზე დაკლიკების მოვლენის დამატება
    button.addEventListener('click', function() {
        // ახალი პარაგრაფის ელემენტის შექმნა
    }
    // ახალი პარაგრაფის ელემენტის შექმნა
    const newParagraph = document.createElement('p');

    // უნიკალური id-ის მინიჭება
    const uniqueId = 'paragraph-' + Date.now();
    newParagraph.id = uniqueId;

    // ტექსტის დამატება პარაგრაფში
    newParagraph.textContent = 'ეს არის ახალი პარაგრაფი უნიკალური id-ით: ' + uniqueId;

    // პარაგრაფის დამატება დივ ბლოკში
    const contentDiv = document.getElementById('contentDiv');
    contentDiv.appendChild(newParagraph);
});
</script>;
