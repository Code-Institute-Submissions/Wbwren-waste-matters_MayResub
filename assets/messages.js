function introMessage () {
    $('#messageContainer').html(
        `
        <h2>Did you know?</h2>
        <p>There is no recycling facility for the processing of Expanded
        polystyrene (EPS) other than to dump it in the landfill where it takes
        up valuable space and works its way to the surface causing other
        environmental concerns.</p>
        `
    )
}

function compactionInfo () {
    $('#messageContainer').html(
    `
    <h2>Polystyrene compactors</h2>
    <p>Polystyrene is made up of 98 per cent air and 2 per cent plastic and thus
    has a high volume/low weight ratio, so even a small quantity of polystyrene
    can rapidly fill a bin or container. Waste Matters Ltd. manufactures
    polystyrene compaction equipment which can process large, medium and small
    volumes of Polystyrene efficiently.</p>
    `
    )
}

function benefitsMessage () {
    $('#messageContainer').html(
        `
        <h2>Benefits of compaction:</h2>
        <ul style="list-style-type: square;">
            <li>Save space</li>

            <li>Improve green recycling targets</li>
            
            <li>Reduce landfill</li>
            
            <li>Reduce carbon footprint</li>
            
            <li>Reduce costs</li>
        </ul>
        `
    )
}

