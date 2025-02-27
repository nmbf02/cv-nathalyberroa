"use client";

import dynamic from "next/dynamic";
const PDFDownloadLink = dynamic(() => import("@react-pdf/renderer").then(mod => mod.PDFDownloadLink), { ssr: false });

const styles = StyleSheet.create({
    page: { padding: 20 },
    section: { marginBottom: 10 },
    title: { fontSize: 24, fontWeight: "bold", marginBottom: 5 },
    text: { fontSize: 12 },
});

const ResumePDF = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.title}>Eleazar García</Text>
                <Text style={styles.text}>Desarrollador de Software</Text>
                <Text style={styles.text}>Email: ing.eleazargarcia98@gmail.com</Text>
                <Text style={styles.text}>Tel: (849) 354 - 7557</Text>
            </View>
        </Page>
    </Document>
);

const DownloadPDFButton = () => (
    <PDFDownloadLink document={<ResumePDF />} fileName="Eleazar_Garcia_CV.pdf">
        {({ loading }) =>
            loading ? "Generando PDF..." : "Descargar CV"
        }
    </PDFDownloadLink>
);

export default DownloadPDFButton;