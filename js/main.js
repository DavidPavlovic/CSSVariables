const input = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
};

/*for(let i = 0; i < input.length; i++) {
    input[i].addEventListener('change', handleUpdate);
}*/

input.forEach(input => {
    input.addEventListener('change', handleUpdate);
});