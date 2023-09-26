export default function decorate(block){

    // decorate the quote as a blockquote element
    const quoteDiv = block.querySelector(':scope > div > div');
    const blockquote = document.createElement('blockquote');
    blockquote.innerHTML = `"${quoteDiv.innerHTML}"`;
    quoteDiv.parentElement.replaceWith(blockquote);

    // decorate the author
    const authorDiv = document.querySelector(':scope > div > div');
    if(authorDiv){
        const p = document.createElement('p');
        p.innerHTML = `<em> - ${authorDiv.innerHTML} </em>`;
        authorDiv.parentElement.replaceWith(p);
    }
}