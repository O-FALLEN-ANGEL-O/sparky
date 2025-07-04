import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from 'lucide-react';

type CertificateViewerProps = {
    certificateUrl: string;
}

export function CertificateViewer({ certificateUrl }: CertificateViewerProps) {
    return (
        <Card className="h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Certification</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="flex flex-col items-center justify-center bg-muted/50 aspect-square rounded-md p-4">
                    <p className="text-center text-muted-foreground">
                        Embedded PDF certificate viewer would be here.
                    </p>
                    <p className="text-xs text-muted-foreground mt-2 break-all">Cert: {certificateUrl}</p>
                </div>
            </CardContent>
        </Card>
    )
}
