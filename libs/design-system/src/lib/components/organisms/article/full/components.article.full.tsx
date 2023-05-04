import Image from 'next/legacy/image';
import { Avatar, Box, DummyIMG, Link, LoadingLine } from '../../../atoms';
import { Ads } from '../../../organisms';
import { useBreakpoints } from '../../../../hooks';
import { ParseContentPartToChunk } from './../../../molecules';
import { Article, BoxAds, BoxAuthor, BoxAuthorData, BoxContent, BoxImg, BoxImgData, Header, Tag, Tags } from './components.article.full.styles';
import { Props } from './components.article.full.types';
import { parserDayToName, parserMonthToName } from '../../../../utils';
import { transformChunkToComponent } from '../../../molecules/chunks/components/parsers/parseChunkToComponent/parseChunkToComponent';

export const ArticleFull: Props = ({ data, isLoading }) => {
  const { isTabletOrMobile } = useBreakpoints();
  const { createdAt, cover, title, author, tags, stats, lead, contentparts } = data;

  const isLoadingImg = (
    <BoxImgData>
      <BoxImg>
        {isLoading ? (
          <LoadingLine height={{ x: '18rem', s: '30rem' }} />
        ) : cover?.src ? (
          <>
            <Image layout="fill" objectFit="cover" src={cover.src} alt={cover?.alt ? cover.alt : title} />
          </>
        ) : (
          <DummyIMG height={{ x: '18rem', s: '50rem' }} width="100%" />
        )}
      </BoxImg>
      {cover?.caption && <span>Źródło: {cover.caption}</span>}
    </BoxImgData>
  );

  const isLoadingAuthor = (
    <BoxAuthor>
      {isLoading ? (
        <>
          <Avatar isLoading={isLoading} />
          <BoxAuthorData>
            {...new Array(2).fill(
              <span>
                <LoadingLine />
              </span>,
            )}
          </BoxAuthorData>
        </>
      ) : (
        <>
          <Avatar src={data?.author?.avatar?.src} name={data?.author?.name} />
          <BoxAuthorData>
            <span>{data?.author?.name}</span>
            {data?.createdAt && <span>{`${new Date(data?.createdAt).getDate()} ${parserMonthToName(data?.createdAt)} ( ${parserDayToName(data?.createdAt)} )`}</span>}
          </BoxAuthorData>
        </>
      )}
    </BoxAuthor>
  );

  const isLoadingHeader = <Header>{isLoading ? <LoadingLine height="4.2rem" /> : <>{data?.title}</>}</Header>;

  const isLoadingTags = (
    <Tags>
      {isLoading
        ? new Array(5).fill(
            <Tag>
              <LoadingLine height="2rem" width="3.5rem" style={{ marginRight: '1rem' }} />
            </Tag>,
          )
        : data?.tags?.map(tag => (
            <Tag>
              {tag?.slug && tag?.title && (
                <Link href={tag.slug} title={tag.title}>
                  {tag.title}
                </Link>
              )}
            </Tag>
          ))}
    </Tags>
  );

  return (
    <Article>
      <BoxContent>
        {isLoadingHeader}
        <p className="lead">{data?.lead}</p>

        {isLoadingAuthor}
      </BoxContent>
      {!isTabletOrMobile && (
        <BoxAds>
          <Ads slot="s250250" />
        </BoxAds>
      )}
      {isLoadingImg}
      <BoxContent>
        {isLoadingTags}
        {data?.contentparts && <ParseContentPartToChunk contentParts={data.contentparts}>{({ chunkComponents }) => chunkComponents.map(transformChunkToComponent)}</ParseContentPartToChunk>}
      </BoxContent>
      {!isTabletOrMobile && (
        <BoxAds>
          <Box
            position="sticky"
            style={{
              top: '6rem',
            }}
          >
            <Ads slot="s250600" />
          </Box>
        </BoxAds>
      )}
    </Article>
  );
};
