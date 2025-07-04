'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Search, Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { aiSmartSearch } from '@/ai/flows/ai-smart-search';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  query: z.string().min(3, 'Search query must be at least 3 characters.'),
});

export function AISearch() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { query: '' },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResults([]);
    try {
      const response = await aiSmartSearch({ query: values.query });
      setResults(response.results);
      if (response.results.length > 0) {
        setOpen(true);
      } else {
        toast({
            title: 'No Results Found',
            description: "Your AI search didn't return any products.",
        });
      }
    } catch (error) {
      console.error('AI Search Error:', error);
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: 'Failed to perform AI search. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="relative w-full">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
              <FormField
                control={form.control}
                name="query"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="AI Smart Search..."
                          className="pl-10"
                          {...field}
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit" size="icon" disabled={loading} aria-label="Search">
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Search className="h-4 w-4" />
                )}
              </Button>
            </form>
          </Form>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] max-h-[--radix-popover-content-available-height]">
        <div className="p-4">
          <h4 className="font-medium leading-none mb-4">Search Results</h4>
          {results.length > 0 ? (
            <ul className="grid gap-2">
              {results.map((item, index) => (
                <li
                  key={index}
                  className="text-sm p-2 hover:bg-accent rounded-md"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">
              No products found matching your search.
            </p>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
