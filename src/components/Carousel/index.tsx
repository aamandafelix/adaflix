import React from 'react';
import {
  VideoCardGroupContainer,
  VideoCardList,
  Title,
  ExtraLink
} from './styles';
import VideoCard from './components/VideoCard';

interface LinkExtra {
  text: string;
  url: string;
}

interface Video {
  titulo: string;
  url: string;
}

interface Category {
  titulo: string;
  link?: string;
  cor: string;
  link_extra?: LinkExtra;
  videos: Video[];
}

interface VideoCardGroupProps {
  ignoreFirstVideo?: boolean;
  category: Category;
}

function VideoCardGroup({
  ignoreFirstVideo,
  category,
}: VideoCardGroupProps) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category?.link_extra;
  const videos = category.videos;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && 
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}  
            </ExtraLink>
          }
        </>
      )}
      <VideoCardList>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <li key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </li>
          );
        })}
      </VideoCardList>
    </VideoCardGroupContainer>
  );
}

export default VideoCardGroup;
