import type { SnippetCardProps } from '@/components';
import type { Snippet } from '../api/snippets.interface';

export function mapSnippetsToCards(
  snippets: Snippet[],
  onLike: (id: string) => void,
  onDislike: (id: string) => void,
  onComment: (id: string) => void,
): SnippetCardProps[] {
  return snippets.map((snippet) => {
    const likes = snippet.marks.filter((mark) => mark.type === 'like').length;
    const dislikes = snippet.marks.filter((mark) => mark.type === 'dislike').length;
    const comments = snippet.comments.length;

    return {
      id: snippet.id,
      username: snippet.user.username,
      language: snippet.language,
      code: snippet.code,
      likes,
      dislikes,
      comments,
      onLike,
      onDislike,
      onComment,
    };
  });
}

// selector i sdelat' custom hook s mapp  i vitaskivat' ot tuda
// normal'no reaalisovat' inteface
