const textArea = document.getElementById('textArea');
const increaseSizeBtn = document.getElementById('increaseSize');
const decreaseSizeBtn = document.getElementById('decreaseSize');
const fontStyleDropdown = document.getElementById('fontStyle');
const textStyleDropdown = document.getElementById('textStyle');
const textColorInput = document.getElementById('textColor');

// Get the dropdown for text alignment
const alignmentDropdown = document.getElementById('alignmentDropdown');


let fontSize = 20;

increaseSizeBtn.addEventListener('click', () =>{
    fontSize += 2;
    textArea.style.fontSize = `${fontSize}px`;
});

decreaseSizeBtn.addEventListener('click',() =>{
    fontSize -=2;
    textArea.style.fontSize = `${fontSize}px`
});

alignmentDropdown.addEventListener('change', (event) => {
    const alignmentvalue = event.target.value;

    // Focus on the textArea to apply the command at the selected position or range
    textArea.focus();

    // Use correct alignment commands
    if (alignmentvalue === 'justifyLeft') {
        document.execCommand('justifyLeft');
    }
    else if (alignmentvalue === 'justifyCenter') {
        document.execCommand('justifyCenter');
    }
    else if (alignmentvalue === 'justifyRight') {
        document.execCommand('justifyRight');
    }
    else {
        document.execCommand('justifyFull');
    }
});



fontStyleDropdown.addEventListener('change',(event) =>{
    textArea.style.fontFamily = event.target.value;
});
textStyleDropdown.addEventListener('change', (event) =>{
    const value = event.target.value;
    if(value === 'bold'){
        document.execCommand('bold');
    }
    else if(value === 'italic'){
        document.execCommand('italic');
    }
    else if( value === 'bold italic'){
        document.execCommand('italic');
        document.execCommand('bold');
    }
    else{
        document.execCommand('normal')
    }

});

textColorInput.addEventListener('input', (event) =>{
    document.execCommand('foreColor', false, event.target.value)
});

// textStyleInput.addEventListener('input',(event) =>{
//     document.execCommand('foreColor', false,event.target.value)
// });


textArea.addEventListener('paste', (event) => {
    event.preventDefault(); // Prevent default paste behavior

    // Get the plain text from clipboard
    const text = event.clipboardData.getData('text/plain');

    // Insert the text without any styles
    document.execCommand('insertText', false, text);
});


