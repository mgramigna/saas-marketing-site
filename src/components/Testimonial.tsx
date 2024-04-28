import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Testimonial = ({
  text,
  author,
}: {
  text: string;
  author: {
    name: string;
    title?: string;
    avatarUrl?: string;
  };
}) => {
  return (
    <Card className="flex flex-col justify-between">
      <CardContent>
        <p className="text-lg text-slate-900 tracking-tight">{text}</p>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Separator />
        <div className="flex justify-between pt-6">
          <div className="flex flex-col">
            <p className="text-slate-900 font-display">{author.name}</p>
            {author.title && (
              <p className="text-sm text-slate-500">{author.title}</p>
            )}
          </div>
          <div>
            <Avatar>
              {author.avatarUrl && <AvatarImage src={author.avatarUrl} />}
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
