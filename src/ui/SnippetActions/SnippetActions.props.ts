export interface SnippetActionsProps {
  id: string;
  likes: number;
  dislikes: number;
  comments: number;
  onLike: (id: string) => void;
  onDislike: (id: string) => void;
  onComment: (id: string) => void;
}
