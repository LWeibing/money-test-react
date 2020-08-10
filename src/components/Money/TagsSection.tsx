import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
    background: white;
    font-size: 14px;
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    > ol {
      display: flex;
      flex-wrap: wrap;
      
      > li {
        background: #f5f5f5;
        height: 24px;
        line-height: 24px;
        border-radius: 12PX;
        padding: 0 1.3em;
        margin-right: 12px;
        margin-top: 6px;
        &.selected {
          background: rgb(255, 153, 0);
          color: white;
        }
      }
    }
    > button {
        margin-top: 16px;
        background: transparent;
        border: none;
        color: rgba(255,153,0,0.5);
        border-bottom: 1px solid;
        padding: 0 4px;
      }
`;
type Props = {
  value: string[];
  onChange: (selected: string[]) => void;
}
const TagsSection: React.FC<Props> = (props) => {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  const selectedTags = props.value;
  const onAddTag = () => {
    const tagName = window.prompt('请输入新的标签名');
    if (tagName !== null) {
      setTags([...tags, tagName]);
    }
  };
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      props.onChange(selectedTags.filter(t => t !== tag));
    } else {
      props.onChange([...selectedTags, tag]);
    }
  };

  const getClass = (tag: string) => selectedTags.indexOf(tag) >= 0 ? 'selected' : '';
  return (
    <Wrapper>
      <ol>
        {tags.map(tag => <li key={tag} onClick={() => {onToggleTag(tag);}}
                             className={getClass(tag)}>{tag}</li>)}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

export {TagsSection};