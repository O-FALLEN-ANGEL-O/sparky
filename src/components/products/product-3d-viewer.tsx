import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Box } from 'lucide-react';

type Product3DViewerProps = {
    modelUrl: string;
}

export function Product3DViewer({ modelUrl }: Product3DViewerProps) {
    return (
        <Card className="h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">3D Viewer</CardTitle>
                <Box className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="flex flex-col items-center justify-center bg-muted/50 aspect-square rounded-md p-4">
                    <p className="text-center text-muted-foreground">
                        Interactive 3D model viewer would be here.
                    </p>
                    <p className="text-xs text-muted-foreground mt-2 break-all">Model: {modelUrl}</p>
                </div>
            </CardContent>
        </Card>
    )
}
