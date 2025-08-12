import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Snippet } from './snippets.interface';
import type { MarkType } from '@/types/snippets.types';

interface SnippetsState {
  snippets: Snippet[];
}

const initialState: SnippetsState = {
  snippets: [],
};

const snippetsSlice = createSlice({
  name: 'snippets',
  initialState,
  reducers: {
    setSnippets: (state, action: PayloadAction<Snippet[]>) => {
      state.snippets = action.payload;
    },

    updateMarkLocal: (
      state,
      action: PayloadAction<{ snippetId: string; mark: MarkType; userId: string }>,
    ) => {
      const { snippetId, mark, userId } = action.payload;
      const snippet = state.snippets.find((s) => s.id === snippetId);
      if (!snippet) return;

      const existingMarkIndex = snippet.marks.findIndex((m) => m.user.id === userId);

      if (mark === 'none') {
        if (existingMarkIndex !== -1) {
          snippet.marks.splice(existingMarkIndex, 1);
        }
        return;
      }

      if (existingMarkIndex === -1) {
        snippet.marks.push({
          id: '',
          type: mark,
          user: { id: userId, username: '', role: 'user' },
        });
        return;
      }

      snippet.marks[existingMarkIndex].type = mark;
    },
  },
});

export const snippetsReducer = snippetsSlice.reducer;
export const snippetsAction = snippetsSlice.actions;
