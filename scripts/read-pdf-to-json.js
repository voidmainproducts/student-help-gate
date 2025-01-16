const fs = require('fs');
const pdfParse = require('pdf-parse'); // Make sure to install pdf-parse

async function parseAndSaveToJson(pdfPath, className, subject) {
    try {
        // Read and extract text from the PDF file
        const pdfBuffer = fs.readFileSync(pdfPath); // Read the PDF as a buffer
        const pdfData = await pdfParse(pdfBuffer);

        // Extracted text from the PDF
        const extractedText = pdfData.text;
        console.log("pdf data", extractedText)

        // Replace "Pashchim Champaran" with "PashchimChamparan"
        // const modifiedData = extractedText.replace(/Pashchim\s+Champaran\n/g, "Pashchim Champaran");
        const modifiedData = extractedText;


        // Regex to match the required patterns
        const regex = /(\d{1,8})\s+(\d{1,8})\s+((?:[a-zA-Z]+\s?)+)/g;
        const matches = [];

        let match;
        while ((match = regex.exec(modifiedData)) !== null) {
            const firstNumber = match[1]; // First group: the first number
            const secondNumber = match[2]; // Second group: the second number
            const text = match[3].trim(); // Third group: the text portion

            matches.push({
                serialNo: firstNumber,
                rollNo: secondNumber,
                districtName: text,
                className: className,
                subject: subject,
            });
        }

        const jsonData = JSON.stringify(matches, null, 2); // Pretty-print JSON

        // Save the JSON data to a file
        const outputFilePath = `new-output-${className}-${subject}.json`;
        fs.writeFileSync(outputFilePath, jsonData);

        console.log('JSON data saved to:', outputFilePath);
        console.log('Last match:', matches);

        console.log('Last match:', matches[matches.length - 1]);
        console.log('Total matches:', matches.length);

    } catch (err) {
        console.error('Error:', err);
    }
}

// Example usage
const pdfPath = '/Users/rjs/Downloads/6to8sanskrit.pdf'; // Path to the PDF file
const className = "6-8";
const subject = "Sanskrit";
parseAndSaveToJson(pdfPath, className, subject);
