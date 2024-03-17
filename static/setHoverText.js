 // Function to fetch and set hover text for a specific KSB
 function setHoverText(ksbId) {
    // Fetch the content of the linked section from the KSB document
    fetch('./KSB.md')
        .then(response => response.text())
        .then(data => {
            // Construct the section identifier (e.g., '## K1')
            const sectionIdentifier = `### ${ksbId}`;
            
            // Extract the content of the specified section
            const match = data.match(new RegExp(`${sectionIdentifier}([\\s\\S]*?)(?=(###|$))`));
            const ksbContent = match ? match[1].trim() : 'Hover Text Not Found';

            // Set the hover text dynamically
            const links = document.getElementsByClassName(ksbId);
            if (links.length > 0) {
                for (let i = 0; i < links.length; i++) {
                    links[i].title = ksbContent;
                }
            }
        })
        .catch(error => console.error('Error fetching content:', error));
}

// Set hover text for each KSB link
for (let i = 1; i <= 25; i++) {
    const kId = `K${i}`;
    setHoverText(kId);
    if (i <= 22) {
        const sId = `S${i}`;
        setHoverText(sId);
        if (i <= 4) {
            const bId = `B${i}`;
            setHoverText(bId);
        };
    } ;
};