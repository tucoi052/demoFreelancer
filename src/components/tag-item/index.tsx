import React, {useCallback, useState} from 'react';
import {Text, TextStyle, TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface TagProps {
  customStyle?: TextStyle;
  title?: string;
  source: string[];
}

const TagItem = (props: TagProps) => {
  const [tagIndex, setTagIndex] = useState<Number>();

  const renderTag = useCallback(() => {
    return (
      <>
        {props.source.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.container,
              props.customStyle,
              tagIndex === index && styles.tagActive,
            ]}
            {...props}
            onPress={() => setTagIndex(index)}>
            <Text
              style={[styles.title, tagIndex === index && styles.titleActive]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </>
    );
  }, [tagIndex]);

  return <>{renderTag()}</>;
};

export default TagItem;
