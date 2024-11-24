import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


export default function Page() {
  return (
    <main>
      <div className="max-w-4xl mx-auto px-3 pt-40">
        <div className="flex place-content-center">
          <p className="text-6xl">Login</p>
        </div>
        <div className="flex place-content-center pt-2">
            <p>Get ready to be matched!</p>
        </div>
        <div className="flex place-content-center pt-10">
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <Card>
                    <CardHeader>
                        <CardTitle>Account</CardTitle>
                        <CardDescription>
                        Input your name and preferred username. You can change this later!
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" defaultValue="Oski Bear" />
                        </div>
                        <div className="space-y-1">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" defaultValue="@oskibear" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Next</Button>
                    </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="password">
                    <Card>
                    <CardHeader>
                        <CardTitle>Password</CardTitle>
                        <CardDescription>
                        Add your password here. Make sure it's secure!
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                        <Input id="new" type="password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Confirm</Button>
                    </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
      </div>
    </main>
  );
}
