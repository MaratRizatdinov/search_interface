import * as S from './repositories.style'

export const createContent = (repos) => {
    const tableContent = [];
    const columns = ["name", "description", "link"];
    for (let elem of repos) {
      for (let column of columns) {
        if (column === "name") {
          tableContent.push(
            <S.ReposTableCell key={elem.name}>{elem.name}</S.ReposTableCell>
          );
        } else if (column === "description") {
          tableContent.push(
            <S.ReposTableCell key={elem.description}>
              {elem.description}
            </S.ReposTableCell>
          );
        } else {
          tableContent.push(
            <S.ReposTableCell
              key={elem.clone_url}
              style={{ justifyContent: "center" }}
            >
              <a
                href={elem.clone_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                перейти
              </a>
            </S.ReposTableCell>
          );
        }
      }
    }
    return tableContent;
  };