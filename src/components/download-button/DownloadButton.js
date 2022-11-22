import jsPDF from "jspdf";
import * as htmlToImage from "html-to-image";
// import PDFMerger from 'pdf-merger-js/browser';

// let pdf1;
// let pdf2;

// const Merger = async (files) => {
//     const merger = new PDFMerger()
//
//     // eslint-disable-next-line no-restricted-syntax
//     for (const file of files) {
//         // eslint-disable-next-line no-await-in-loop
//         await merger.add(file);
//     }
//     await merger.save('merged.pdf');
// }

async function exportMultipleChartsToPdf() {
    console.log('initialising download')
    // await createCopies();
    // eslint-disable-next-line new-cap
    const doc = new jsPDF("l", "px");

    const elements = document.getElementsByClassName("download-report");

    await createPdf({doc, elements});

    // pdf1 = await doc.output('blob')

    // await Merger([pdf1, pdf2]);

    doc.save('chart')
}

// async function createCopies(){
//     console.log('creating the 2nd copy....')
//     // eslint-disable-next-line new-cap
//     const doc = new jsPDF("l", "px");
//
//     const elements = document.getElementsByClassName("download-report");
//
//     await creatPdf({ doc, elements });
//
//     pdf2 = await doc.output('blob')
// }

async function createPdf({doc, elements}) {
    const padding = 10;
    const marginTop = 20;
    let top = marginTop;
    console.log(elements)

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < elements.length; i++) {
        const el = elements.item(i);
        console.log({i}, {el})

        let elHeight = el.offsetHeight;
        let elWidth = el.offsetWidth;

        const pageWidth = doc.internal.pageSize.getWidth();

        if (elWidth > pageWidth) {
            const ratio = pageWidth / elWidth;
            elHeight = elHeight * ratio - padding * 2;
            elWidth = elWidth * ratio - padding * 2;
        }

        const pageHeight = doc.internal.pageSize.getHeight();

        if (top + elHeight > pageHeight) {
            doc.addPage();
            top = marginTop;
        }

        // eslint-disable-next-line no-await-in-loop
        const imgData = await htmlToImage.toPng(el);
        doc.addImage(imgData, "PNG", padding, top, elWidth, elHeight, `image${i}`);
        top += elHeight + marginTop;
    }
}


export default exportMultipleChartsToPdf;