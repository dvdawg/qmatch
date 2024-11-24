import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"



export default function Page() {
  return (
    <main>
      <div className="max-w-4xl mx-auto px-3 pt-60">
        <div className="flex place-content-center">
          <p className="text-6xl">Welcome to <strong>qmatch!</strong></p>
        </div>
        <div className="flex place-content-center pt-2">
          <p className="text-xl italic">we will win this hackathon.</p>
        </div>
        <div className="flex place-content-center pt-6">
          <a href="/login"><Button>
            Get Started<ChevronRight />
          </Button></a>
        </div>
      </div>
    </main>
  );
}
