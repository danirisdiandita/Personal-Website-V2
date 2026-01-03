'use client'
import { useState } from 'react'
import { Spinner } from '@/components/ui/spinner'
import { toast } from 'sonner'
interface DownloadCVButtonProps {
    format: 'PDF' | 'DOCX'
    icon: string
    color: string
}

function DownloadCVButton({ format, icon, color }: DownloadCVButtonProps) {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <button
            className={`
                group relative px-4 py-2 border-[3px] border-black text-black font-bold 
                shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] 
                hover:translate-x-[2px] hover:translate-y-[2px] 
                active:translate-x-[4px] active:translate-y-[4px] 
                transition-all flex items-center gap-2 cursor-pointer
                disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:translate-x-[4px] disabled:translate-y-[4px]
            `}
            style={{ backgroundColor: color }}
            type="button"
            title={`Download CV as ${format}`}
            disabled={isLoading}
            onClick={async () => {
                if (format === 'DOCX') {
                    setIsLoading(true);
                    try {
                        const { downloadCVDocx } = await import('@/lib/docx-util');
                        await downloadCVDocx();
                        toast.success("CV DOCX Downloaded Successfully!", {
                            position: "top-center",
                            style: {
                                border: '3px solid black',
                                boxShadow: '4px 4px 0px 0px black',
                                backgroundColor: '#B9F8FE',
                                color: 'black',
                                fontWeight: 'bold',
                                borderRadius: '8px',
                            },
                        });
                    } catch (error) {
                        console.error(error);
                        toast.error("Failed to download DOCX CV", {
                            position: "top-center",
                            style: {
                                border: '3px solid black',
                                boxShadow: '4px 4px 0px 0px black',
                                backgroundColor: '#FF6B6B',
                                color: 'black',
                                fontWeight: 'bold',
                            }
                        });
                    } finally {
                        setIsLoading(false);
                    }
                } else if (format === 'PDF') {
                    setIsLoading(true);
                    try {
                        const { downloadCVPdf } = await import('@/lib/pdf-util');
                        await downloadCVPdf();
                        toast.success("CV PDF Downloaded Successfully!", {
                            position: "top-center",
                            style: {
                                border: '3px solid black',
                                boxShadow: '4px 4px 0px 0px black',
                                backgroundColor: '#FF6B6B', // Red-ish for PDF
                                color: 'black',
                                fontWeight: 'bold',
                                borderRadius: '8px',
                            },
                        });
                    } catch (error) {
                        console.error(error);
                        toast.error("Failed to download PDF CV", {
                            position: "top-center",
                            style: {
                                border: '3px solid black',
                                boxShadow: '4px 4px 0px 0px black',
                                backgroundColor: '#FF6B6B',
                                color: 'black',
                                fontWeight: 'bold',
                            }
                        });
                    } finally {
                        setIsLoading(false);
                    }
                }
            }}
        >
            {isLoading ? <Spinner className="size-5 text-black animate-spin" /> : <span className="text-lg">{icon}</span>}
            <span className="font-black tracking-wider">{format}</span>
        </button>
    )
}

export default function DownloadCV() {
    return (
        <div className="flex flex-wrap gap-4 items-center">
            <span className="font-bold text-black uppercase tracking-tight hidden sm:block">Get my CV:</span>
            <div className="flex gap-3">
                <DownloadCVButton format="PDF" icon="📄" color="#FF6B6B" />   {/* Red-ish */}
                <DownloadCVButton format="DOCX" icon="📝" color="#4ECDC4" /> {/* Teal-ish */}
            </div>
        </div>
    )
}